"use client";

import { Card, Placeholder } from "react-bootstrap";

export default function Loading() {
    return(
        <div className="row row-cols-1 row-cols-md-3 g-4 w-100" style={{ gap: '70px', justifyContent: 'center' }}>
        <div className="col">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={12} />
                </Placeholder>
                <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={12} /> <Placeholder xs={12} /> <Placeholder xs={4} />{' '}
                    <Placeholder xs={12} /> <Placeholder xs={12} />
                </Placeholder>
                </Card.Body>
            </Card>
        </div>
        <div className="col">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={6} />
                </Placeholder>
                <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={12} /> <Placeholder xs={12} /> <Placeholder xs={4} />{' '}
                    <Placeholder xs={12} /> <Placeholder xs={12} />
                </Placeholder>
                </Card.Body>
            </Card>
        </div>
        <div className="col">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={12} />
                </Placeholder>
                <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={12} /> <Placeholder xs={12} /> <Placeholder xs={4} />{' '}
                    <Placeholder xs={12} /> <Placeholder xs={12} />
                </Placeholder>
                </Card.Body>
            </Card>
        </div>
        <div className="col">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={6} />
                </Placeholder>
                <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={12} /> <Placeholder xs={12} /> <Placeholder xs={4} />{' '}
                    <Placeholder xs={12} /> <Placeholder xs={12} />
                </Placeholder>
                </Card.Body>
            </Card>
        </div>
    </div>
    )
};
