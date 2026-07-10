import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import AnimatedParagraph from "./AnimatedParagraph.tsx";


interface MediaCardProps extends React.HTMLProps<HTMLDivElement> {
    image: string;
    altText?: string;
    captionTitle: string;
    captionBody: string;
    captionLocation: string;
}


export default function MediaCard(props: MediaCardProps) {
  return (
    <Card sx={{ width: 345, height: 600, position: 'relative', color: 'unset' }}>
      <CardMedia
        sx={{ height: 600 }}
        image={props.image}
        title={props.altText}
      />
      <CardContent 
        sx={{ 
            position: 'absolute', height: '30%', bottom: 0, width: '100%',
            background: 'linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%)'
        }}>
        <p style={{ color: 'white' }}>
            {props.captionTitle}
        </p>
        <p>
            {props.captionBody}
        </p>
        <p>
            {props.captionLocation}
        </p>
      </CardContent>
    </Card>
  );
}