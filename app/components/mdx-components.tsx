import Image from "next/image"
import { useMDXComponent } from "next-contentlayer/hooks"


function RoundedImage(props: any) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

const components = {
  Image: RoundedImage,
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {


  const Component = useMDXComponent(code)

  return <Component components={components} />
}
