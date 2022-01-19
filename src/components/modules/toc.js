import React from "react"

const ToC = ({ headings }) => (
    <div className={'toc'}>
        <div className={'toc-inner'}>
            {headings.map(heading => {
                if (heading.depth > 4) {
                    return <div />
                }

                return (
                    <div key={heading.value}>
                        <a
                            href={`#${heading.value.replace(/\s+/g, "-").toLowerCase()}`}
                        >
                            {heading.value}
                        </a>
                    </div>
                )
            })}
        </div>
    </div>
)

export default ToC
