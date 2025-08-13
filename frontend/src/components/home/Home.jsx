import Section from "../section/Section";
import "./style.css";
import { cardData, explorData, workData } from "../../constants/index.js";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

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
            <Section>
                <div className="explore">
                    <h1>Explore Example Prompts</h1>
                    <div className="explore__cards">
                        {explorData.map((explore, index) => (

                            <div className="explore__card" key={index}>
                                <div className="explore__data">
                                    <div className="text">{explore.prompt}</div>
                                    <button className="logo"><explore.icon /></button>
                                </div>
                                <div className="tags">
                                    {explore.tags.map((tag, index) => (
                                        <p className="tag" key={index}>{tag}</p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
            <footer>
                <div className="footer_list">
                    <div className="logo_info">
                        <div className="logo">
                            <img src="/images/prompt-vault.png" alt="Logo Images" />
                            <p>PromptVault</p>
                        </div>
                        <p>Your daily dose of creative prompts</p>
                    </div>
                    <div className="links">
                        <p>Quick links</p>
                        <ul className="link">
                            <Link>Home</Link>
                            <Link>Explore Prompts</Link>
                            <Link>About</Link>
                            <Link>Privacy Policy / Terms of Service</Link>
                        </ul>
                    </div>
                    <div className="connect">
                        <div className="text">
                            <p>Connect</p>
                        </div>
                        <div className="link">
                            <Link>
                                <FaGithub className="icon" />
                            </Link>
                            <Link>
                                <FaTwitter className="icon" />
                            </Link>
                            <Link>
                                <FaLinkedin className="icon" />
                            </Link>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="footer_info">
                    <p>© 2023 PromptVault. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
};

export default Home;
