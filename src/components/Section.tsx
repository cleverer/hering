import React from 'react'
import { Helmet } from 'react-helmet'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { LinkComponent } from '../helper/MarkdownComponents'
import Chapter, { ChapterT } from './Chapter'

export type SectionT = {
    chapters: Array<ChapterT>
    sorting: number
    title: string
    content: string
    slug: string
    icon: IconT
    menu_name: string
}

export type IconT = {
    url: string
    mime: string
}

type Props = {
    section: SectionT
}

function Section(props: Props) {
    const chapters = props.section['chapters'].sort(function (a: ChapterT, b: ChapterT) {
        return a.sorting - b.sorting;
    }).map(function (chapter: any) {
        return <Chapter key={chapter['title']} data={chapter}></Chapter>
    })

    return <div className='content'>
        <Helmet><title>{props.section['title']}</title></Helmet>

        <div className="section-title">
            <img src={props.section.icon ? props.section.icon.url : ''} alt="icon" />
            <h1>{props.section['title']}</h1>
        </div>
        <div className='content-main'>
            <ReactMarkdown
                plugins={[remarkGfm]}
                components={LinkComponent}
            >{props.section.content}</ReactMarkdown>
            {chapters}
        </div>
    </div>
}

export default Section