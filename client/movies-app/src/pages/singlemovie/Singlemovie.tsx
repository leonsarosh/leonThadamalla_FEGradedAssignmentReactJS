import { Card, Button, Row, Image, Col } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import IDataList from "../../model/IDataList";
import { Alert } from 'react-bootstrap';
// const baseUrl = process.env.REACT_APP_baseUrl2;

const baseUrl = "http://localhost:4000/";

const Singlemovie = () => {

    const [movie, setMovie] = useState<IDataList | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const navigate = useNavigate();
    const getMovies = async () => {
        await axios
            .get<IDataList[]>(
                `${baseUrl}${localStorage.getItem(
                    "movie_type"
                )}?id=${localStorage.getItem("movie_id")}`
            )
            .then((res) => {
                setMovie(res.data[0]);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            });
    };
    useEffect(() => {
        getMovies();
    }, []);
    return (
        <Card
            loading={loading}
            title={
                <Button onClick={() => navigate("/")} type="link">
                    Back to Home
                </Button>
            }
        >
            <Row>
                <Col span={4}>
                    {
                        error && (
                            <Alert variant="danger">{error.message}</Alert>
                        )
                    }
                    {
                        movie && (
                            <Image src={movie.posterurl} />
                        )

                    }
                </Col>
                <Col span={20} className="p-3">
                    {
                        error && (
                            <Alert variant="danger">{error.message}</Alert>
                        )
                    }
                    {
                        movie && (
                            <h2>{`${movie.title}(${movie.year})`}</h2>
                        )

                    }
                    <Row>
                        <Col span={4}>Imdb Rating</Col>
                        {
                            error && (
                                <Alert variant="danger">{error.message}</Alert>
                            )
                        }
                        {
                            movie && (
                                <Col span={20} className="pl-2 mb-2">{movie.imdbRating}</Col>
                            )

                        }
                    </Row>
                    <Row>
                        <Col span={4}>Content Rating</Col>
                        {
                            error && (
                                <Alert variant="danger">{error.message}</Alert>
                            )
                        }
                        {
                            movie && (
                                <Col span={20} className="pl-2 mb-2">{movie.contentRating}</Col>
                            )

                        }
                    </Row>
                    <Row>
                        <Col span={4}>Average Rating</Col>
                        {
                            error && (
                                <Alert variant="danger">{error.message}</Alert>
                            )
                        }
                        {
                            movie && (
                                <Col span={20} className="pl-2 mb-2">{movie.averageRating}</Col>
                            )

                        }
                    </Row>
                    <Row>
                        <Col span={4}>Duration</Col>
                        {
                            error && (
                                <Alert variant="danger">{error.message}</Alert>
                            )
                        }
                        {
                            movie && (
                                <Col span={20} className="pl-2 mb-2">{movie.duration}</Col>
                            )

                        }
                    </Row>
                    <Row>
                        <Col span={4}>Genres</Col>
                        <Col span={20} className="pl-2 mb-2">
                            {movie &&
                                movie.genres &&
                                movie.genres.map((item) => item).join(",")}
                        </Col>` `
                    </Row>
                    <Row>
                        <Col span={4}>Actors</Col>
                        <Col span={20} className="pl-2 mb-2">
                            {movie &&
                                movie.actors &&
                                movie.actors.map((item) => item).join(",")}
                        </Col>
                    </Row>
                    <Row>
                        <Col span={4}>Release Date</Col>
                        {
                            error && (
                                <Alert variant="danger">{error.message}</Alert>
                            )
                        }
                        {
                            movie && (
                                <Col span={20} className="pl-2 mb-2">{movie.releaseDate}</Col>
                            )

                        }
                    </Row>
                    <Row>
                        <Col span={4}>Story line</Col>
                        {
                            error && (
                                <Alert variant="danger">{error.message}</Alert>
                            )
                        }
                        {
                            movie && (
                                <Col span={20} className="pl-2 mb-2">{movie.storyline}</Col>
                            )

                        }
                    </Row>
                </Col>
            </Row>
        </Card>
    );
};

export default Singlemovie;
