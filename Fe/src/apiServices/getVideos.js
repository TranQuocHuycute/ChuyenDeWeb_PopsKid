import * as request from '../../src/utilts/request'

export const getVideo = async () => {
    try {
      const res = await request.get('videos')
      return res.data
    } catch (error) {
      console.log(error)
    }
  }
  