import { Dispatch, SetStateAction } from "react"
import { cmd } from "./awsIcons"
import {
  lambda,
  s3,
  cognito,
  apiGateway,
  dynamoDb,
  cloudFormation,
  iam,
  cloudFront,
  nextjs,
  users,
  route53,
} from "./awsLogos"

import { ArcsObj, SVGobj } from "../app/components/types"

const arcAndSvg = (
  setSvgData: Dispatch<SetStateAction<SVGobj[]>>,
  setArcsData: Dispatch<SetStateAction<ArcsObj[]>>,
  startTime: number
) => {
  const cmd1 = {
    lat: 39.609913,
    lng: -105.962477,
    width: 30,
    icon: cmd,
  }
  const dep1 = {
    cloudFormation: {
      lat: 37.655341,
      lng: -77.609101,
      width: 20,
      icon: cloudFormation,
    },
    s3: {
      lat: 36.39085,
      lng: -72.52224,
      width: 20,
      icon: s3,
    },
    dynamo: {
      lat: 40.852839,
      lng: -73.4117516,
      width: 20,
      icon: dynamoDb,
    },
    lambda: {
      lat: 37.5785658,
      lng: -82.69703416,
      width: 20,
      icon: lambda,
    },
    iam: {
      lat: 32.65962962,
      lng: -74.894964,
      width: 14,
      icon: iam,
    },
    cognito: {
      lat: 33.928878,
      lng: -79.28111,
      width: 20,
      icon: cognito,
    },
    apiGateway: {
      lat: 39.542579,
      lng: -87.111198,
      width: 20,
      icon: apiGateway,
    },
    route53: {
      lat: 45.2445704,
      lng: -74.09607277,
      width: 20,
      icon: route53
    },
    nextjs: {
      lat: 42.112373,
      lng: -79.448519,
      width: 24,
      icon: nextjs,
    },
    cloudFront: {
      lat: 43.1553456,
      lng: -84.988289,
      width: 20,
      icon: cloudFront,
    },
    users1: {
      lat: 39.3560059,
      lng: -121.654596,
      width: 46,
      icon: users,
    },
    cloudFront2: {
      lat: 36.254159,
      lng: -119.287905,
      width: 20,
      icon: cloudFront
    },
    lambda2: {
      lat: 32.429006,
      lng: -118.761365,
      width: 20,
      icon: lambda
    }
  }

  const removeArc = (lat: number, time: number) => {
    setTimeout(() => {
      setArcsData((curArcsData) =>
        curArcsData.filter((d) => d.startLat !== lat)
      )
    }, startTime + time)
  }

  const setArc = (posArray: { start: SVGobj; end: SVGobj }[], time: number) => {
    posArray.forEach((arcEvent) => {
      setTimeout(() => {
        // setSvgData([{ lat: cmd1.lat, lng: cmd1.lng, icon: cmd, width: 30 }])
        setArcsData((curArcsData) => [
          ...curArcsData,
          {
            startLat: arcEvent.start.lat,
            startLng: arcEvent.start.lng,
            endLat: arcEvent.end.lat,
            endLng: arcEvent.end.lng,
            color: "yellow"
          },
        ])
      }, startTime + time)
    })
  }

  const setSvg = (svgArray: SVGobj[], time: number) => {
    svgArray.forEach((svg) => {
      setTimeout(() => {
        setSvgData((curArcsData) => [
          ...curArcsData,
          {
            lat: svg.lat,
            lng: svg.lng,
            width: svg.width,
            icon: svg.icon,
          },
        ])
      }, startTime + time)
    })
  }

  setSvg([cmd1], 400)
  setArc([{ start: cmd1, end: dep1.cloudFormation }], 400)

  setSvg([dep1.cloudFormation], 1400)
  removeArc(cmd1.lat, 1400)

  setArc([{ start: dep1.cloudFormation, end: dep1.s3 }], 1500)
  setArc([{ start: dep1.cloudFormation, end: dep1.dynamo }], 1600)
  setArc([{ start: dep1.cloudFormation, end: dep1.iam }], 1700)

  setSvg([dep1.s3, dep1.dynamo, dep1.iam], 2600)
  removeArc(dep1.cloudFormation.lat, 2600)

  setArc([{start: dep1.cloudFormation, end: dep1.lambda}], 2600)
  setArc([{start: dep1.cloudFormation, end: dep1.apiGateway}], 2700)
  setArc([{start: dep1.cloudFormation, end: dep1.cognito}], 2800)
  setArc([{start: dep1.cloudFormation, end: dep1.nextjs}], 2900)
  setArc([{start: dep1.cloudFormation, end: dep1.route53}], 3000)

  setSvg([dep1.lambda], 3400)
  setSvg([dep1.apiGateway], 3500)
  setSvg([dep1.cognito], 3600)
  setSvg([dep1.nextjs], 3700)
  setSvg([dep1.route53], 3800)
  removeArc(dep1.cloudFormation.lat, 3700)

  setArc([{start: dep1.iam, end: dep1.cognito}, {start: dep1.iam, end: dep1.lambda}], 3700)
  removeArc(dep1.iam.lat, 4500)

  setArc([{start: dep1.cognito, end: dep1.apiGateway}, {start: dep1.cognito, end: dep1.nextjs}], 4500)
  removeArc(dep1.cognito.lat, 5300)

  setArc([{start: dep1.nextjs, end: dep1.cloudFormation}], 5300)
  removeArc(dep1.nextjs.lat, 6100)

  setSvg([dep1.cloudFront], 6100)
  setSvg([dep1.users1], 6500)

  setArc([{start: dep1.users1, end: dep1.route53}], 6500)
  removeArc(dep1.users1.lat, 7500)

  setArc([{start: dep1.route53, end: dep1.cloudFront}], 7500)
  removeArc(dep1.users1.lat, 8500)

  setArc([{start: dep1.cloudFront, end: dep1.users1}], 7500)
  setArc([{start: dep1.nextjs, end: dep1.cloudFront2}], 7500)
  setArc([{start: dep1.nextjs, end: dep1.lambda2}], 7500)
  setSvg([dep1.cloudFront2], 8500)
  setSvg([dep1.lambda2], 8500)
  removeArc(dep1.cloudFront.lat, 8500)
  removeArc(dep1.nextjs.lat, 8500)

}

export default arcAndSvg
