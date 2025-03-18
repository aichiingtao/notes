import http from '@/utils/http.js'

export function grtCategoryAPI(){
  return http({
    url:'/ddlive/v2/pc/home/live',
    method: 'post'
  })
}
