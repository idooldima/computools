// import { SagaIterator } from 'redux-saga';
// import { call, put, takeEvery } from 'redux-saga/effects';
// import {
//   PutActivityAcknowledgementSubmissionRequestType,
//   GetActivityAcknowledgementSubmissionRequestType,
//   SagaActionType,
// } from 'src/modules/types';
// import { uniqBy } from 'lodash';
// import {
//   getAcknowledgementSubmissionAction,
//   getAcknowledgementSubmissionFailureAction,
//   getAcknowledgementSubmissionSuccessAction,
//   putAcknowledgementSubmissionAction,
//   putAcknowledgementSubmissionFailureAction,
//   putAcknowledgementSubmissionSuccessAction,
// } from 'src/modules/actions';
// import { Api } from 'src/modules/utils/api';

// export const getAcknowledgementSubmissionsSaga = function* ({
//   payload: { courseId, activityId },
// }: SagaActionType<GetActivityAcknowledgementSubmissionRequestType>): SagaIterator {
//   try {
//     const result = yield call(
//       Api.AcknowledgementSubmissions.get({ courseId, activityId })
//     );

//     const filteredResult = {
//       ...result.data,
//       acknowledgement_file_views: uniqBy(
//         result.data.acknowledgement_file_views,
//         'acknowledgemen_file.id'
//       ),
//     };

//     yield put(getAcknowledgementSubmissionSuccessAction(filteredResult));
//   } catch (error) {
//     yield put(getAcknowledgementSubmissionFailureAction(error));
//   }
// };

// export const putAcknowledgementSubmissionsSaga = function* ({
//   payload: {
//     acknowledgementSubmissionId,
//     data,
//     submissionType = 'save',
//     onSuccess,
//     sendRequest,
//   },
// }: SagaActionType<PutActivityAcknowledgementSubmissionRequestType>): SagaIterator {
//   if (!sendRequest) {
//     return;
//   }

//   try {
//     const result = yield call(
//       Api.AcknowledgementSubmissions.put({
//         acknowledgementSubmissionId,
//         data,
//         submissionType: 'save',
//       })
//     );

//     if (submissionType === 'submit') {
//       yield call(
//         Api.AcknowledgementSubmissions.put({
//           acknowledgementSubmissionId,
//           data,
//           submissionType,
//         })
//       );
//     }

//     if (result.data) {
//       yield put(putAcknowledgementSubmissionSuccessAction(result.data));
//     }

//     if (onSuccess) {
//       onSuccess();
//     }
//   } catch (error) {
//     yield put(putAcknowledgementSubmissionFailureAction(error));
//   }
// };

// export default function* root() {
//   yield takeEvery(
//     putAcknowledgementSubmissionAction,
//     putAcknowledgementSubmissionsSaga
//   );

//   yield takeEvery(
//     getAcknowledgementSubmissionAction,
//     getAcknowledgementSubmissionsSaga
//   );
// }
