"use client"

import { Card, Placeholder } from "react-bootstrap"

export default function Loading() {
    return (
        <>
        <div>
                <Card style={{ width: "188%", display: "flex", justifyContent: "center", left: "-55px"}}>
                    <Card.Body>
                    <Placeholder as={Card.Title} animation="glow">
                        <Placeholder xs={12} />
                    </Placeholder>
                    <Placeholder as={Card.Text} animation="glow">
                        <Placeholder xs={12} /> <Placeholder xs={12} size="lg" /> <Placeholder xs={4} />{' '}
                        <Placeholder xs={12} /> <Placeholder xs={12} size="lg" />
                    </Placeholder>
                    </Card.Body>
                    </Card>
                <Card style={{ width: "188%", display: "flex", justifyContent: "center", left: "-55px"}}>
                    <Card.Body>
                    <Placeholder as={Card.Title} animation="glow">
                        <Placeholder xs={12} />
                    </Placeholder>
                    <Placeholder as={Card.Text} animation="glow">
                        <Placeholder xs={12} /> <Placeholder xs={12} size="lg" /> <Placeholder xs={4} />{' '}
                        <Placeholder xs={12} /> <Placeholder xs={12} size="lg" />
                    </Placeholder>
                    </Card.Body>
                    </Card>
            </div>
        </>
    )
}