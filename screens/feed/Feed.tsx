import * as React from "react";
import { ActivityIndicator, FlatList, Image, RefreshControl, SafeAreaView } from "react-native";
import { Card } from "react-native-elements";
import { useDebouncedCallback } from 'use-debounce';

import styles from './Feed.styles'
import { Text, View } from "../../components/Themed";
import { RootTabScreenProps } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { getImagesStart, resetImages } from "../../store/feed/actions";
import { feedImagesSelector, feedIsLoadingSelector } from "../../store/feed/selectors";
import { ImageType } from "../../store/feed/types";

export default function Feed({ navigation }: RootTabScreenProps<"TabOne">) {
  const dispatch = useDispatch();
  const images = useSelector(feedImagesSelector)
  const isLoading = useSelector(feedIsLoadingSelector)

  React.useEffect(() => { dispatch(getImagesStart()) }, []);

  const onRefresh = () => {
    dispatch(resetImages());
    dispatch(getImagesStart());
  }

  const renderCard = ({ item: image }: { item: ImageType }) => (
    <Card>
      <View style={styles.container} >
        <Image style={styles.img} resizeMode="cover"
          source={{ uri: image.download_url }} />
        <Text style={styles.text}>{image.author}</Text>
      </View>
    </Card>
  )

  const handleLoadMore = useDebouncedCallback(
    () => {
      dispatch(getImagesStart());
    },
    1500
  );

  return (
    <SafeAreaView style={styles.cardContainer}>
      <View style={styles.container}>
        <FlatList style={styles.card}
          data={images}
          keyExtractor={item => item.id}
          renderItem={renderCard}
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={onRefresh}
            />
          }
          onEndReached={handleLoadMore}
        />
        {isLoading && <ActivityIndicator size="large" />}
      </View>
    </SafeAreaView >
  );
}
