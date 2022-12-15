import * as request from '../../src/utilts/request'

export const seacrh = async (q, type = 'less') => {
  try {
    const res = await request.get('users/search', {
      params: {
        q,
        type,
      },
    })
    return res.data
  } catch (error) {
    console.log(error)
  }
}
