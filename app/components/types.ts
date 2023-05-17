export interface SVGobj {
  lat: number
  lng: number
  icon: string
  width: number
  color?: string
}
export interface ArcsObj {
  startLat: number
  startLng: number
  endLat: number
  endLng: number
  dashAnimateTime?: number
}