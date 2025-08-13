import Section from "../section/Section";
import "./style.css";
import { cardData, workData } from "../../constants/index.js";
import { Fragment } from "react";

const Home = () => {
    return (
        <>
            <Section>
                <div className="home">
                    <div className="content">
                        <h1>Save, Organize & Discover Your Best Prompts</h1>
                        <p>
                            Never lose your best AI prompts again. Store them in your personal
                            vault and tag them for easy access.
                        </p>
                        <button className="home__button">Get Started</button>
                    </div>
                    <div className="img">
                        <div className="box"></div>
                    </div>
                </div>
            </Section>
            <Section>
                <div className="why-us">
                    <h1>Why PromptVault?</h1>
                    <div className="cards">
                        {cardData.map((card, indx) => (
                            <div className="card" key={indx}>
                                <div className="logo">
                                    <card.icon />
                                </div>
                                <div className="title">{card.title}</div>
                                <div className="description">{card.description}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
            <Section>
                <div className="how-its-work">
                    <h1>How It's Work?</h1>
                    <div className="works">
                        {workData.map((work, index) => (
                            <Fragment key={index}>
                                <div className="work">
                                    <div className="logo">
                                        <work.icon />
                                    </div>
                                    <div className="title">{work.title}</div>
                                    <div className="description">{work.description}</div>
                                </div>
                                {index < workData.length - 1 && (
                                    <div className="dots">
                                        <div className="dot"></div>
                                        <div className="dot"></div>
                                        <div className="dot"></div>
                                        <div className="dot"></div>
                                        <div className="dot"></div>
                                        <div className="dot"></div>
                                        <div className="dot"></div>
                                        <div className="dot"></div>
                                        <div className="dot"></div>
                                        <div className="dot"></div>
                                    </div>
                                )}
                            </Fragment>
                        ))}
                    </div>
                </div>
            </Section>
        </>
    );
};

export default Home;
