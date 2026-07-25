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
    <Card className={props.className} sx={{ backgroundColor: 'black', color: 'unset' }}>
      <CardMedia sx={{ position: 'relative' }}
        image={props.image}
        title={props.altText}
      >
        <div style={{
          position: 'absolute', height: '10%', bottom: 0, width: '100%',
          background: 'linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)'
        }}/>
      </CardMedia>
      <CardContent sx={{ padding: '0 1rem !important' }}>
        <p style={{ color: 'white', fontWeight: 500, fontSize: '1.2rem', marginTop: '0.5rem' }}>
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