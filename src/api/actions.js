import CALL_API from './callApi'

function actions (data) {
  const { url, methods, params } = data
  return CALL_API(url, methods, params)
}

export default actions