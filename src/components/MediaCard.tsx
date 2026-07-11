import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


interface MediaCardProps extends React.HTMLProps<HTMLDivElement> {
    image: string;
    altText?: string;
    captionTitle: string;
    captionBody: string;
    captionLocation: string;
}


export default function MediaCard(props: MediaCardProps) {
  return (
    <Card className={props.className} sx={{ position: 'relative', color: 'unset' }}>
      <CardMedia
        image={props.image}
        title={props.altText}
      />
      <CardContent 
        sx={{ 
            position: 'absolute', height: '30%', bottom: 0, width: '100%',
            background: 'linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%)'
        }}>
        <p style={{ color: 'white', fontWeight: 500, fontSize: '1.2rem' }}>
            {props.captionTitle}
        </p>
        <p style={{ lineHeight: '2rem' }}>
            {props.captionBody}
        </p>
        <p>
            {props.captionLocation}
        </p>
      </CardContent>
    </Card>
  );
}