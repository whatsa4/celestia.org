import React from "react"
import { Link } from "gatsby"
import Image from "./imageComponent";

const LearnBox = ({ post, learnmodules }) => (
    <Link to={post.frontmatter.slug} state={{learnmodules:learnmodules}}>
        <div className={'learn-box'}>
            <div className={'image'}>
                <Image alt={post.frontmatter.title} filename={post.frontmatter.icon}/>
            </div>
            <div className={'title'}>{post.frontmatter.title}</div>
            <div className={'text'}>{post.frontmatter.description}</div>
            <div className={'button button-external'}>Read now <i className={'icon-external-link'}></i></div>
        </div>
    </Link>
)

export default LearnBox
