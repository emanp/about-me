import { Card, Button, CardBody, CardFooter, Image} from "@nextui-org/react";
import PropTypes from "prop-types";


ImageCardComponent.propTypes = {
  footerTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}


export default function ImageCardComponent(props) {
return (
	<Card isFooterBlurred className="background-transparent">

		<Image autoResize={true} quality={100} alt={props.alt} src={props.source} />
		<CardFooter className="absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 flex flex-col items-center">
			<h3 className="text-center text-lg text-white">{props.footerTitle}</h3>
			<p className="text-center text-tiny text-white/80">{props.description}</p>
		</CardFooter>
			{/* <Button
				className="text-tiny text-white bg-black/20"
				color="default"
				radius="lg"
				size="sm"
				variant="flat"
			>
				Notify me */}
			
	</Card>
);
}