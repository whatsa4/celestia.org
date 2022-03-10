import React, {useEffect} from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Sticky from "react-sticky-el";

const ToC = ({ headings, frontmatter }) => (
    useEffect(() => {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    const id = entry.target.getAttribute('id');
                    if (entry.intersectionRatio > 0) {
                        document.querySelector(`.toc a[href*="#${id}"]`).parentElement.classList.add('selected');
                    } else {
                        document.querySelector(`.toc a[href*="#${id}"]`).parentElement.classList.remove('selected');
                    }
                });
            });

            // Track all sections that have an `id` applied
            document.querySelectorAll('h4[id]').forEach((section) => {
                observer.observe(section);
            });

        //});
    }),
     (
        <div className={'toc'}>
            <div className={'toc-inner'}>
                {headings.map((heading,index) => {
                    if (heading.depth === 4) {
                        return (
                            <div key={index} className={index === 1 ? 'selected' : ''}>
                                <AnchorLink to={`#${heading.value.replace(/\s+/g, "-").toLowerCase()}`}>
                                    {heading.value}
                                </AnchorLink>
                            </div>
                        )
                    }
                })}
            </div>

            <a href={frontmatter.edit} className={'suggest-button'} target={'_blank'} rel={'noreferrer'}>
                <i className={'icon-edit'}></i>SUGGEST AND EDIT
            </a>
        </div>
    )
)

export default ToC
