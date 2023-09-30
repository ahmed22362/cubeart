import Spinner from 'react-bootstrap/Spinner';

export default function Loader() {
    return (
        <>
            <Spinner animation="border" style={{width: "200px", height: "200px", borderWidth: "20px"}} variant='primary'/>
        </>
    )
}