import * as request from '../../src/utilts/request'

export const seacrh = async (key) => {
  try {
    const res = await request.get('search/', {
      params: {
        key
      },
    })
    return res.data
  } catch (error) {
    console.log(error)
  }
}

