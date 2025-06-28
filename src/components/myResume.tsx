import React from 'react';

type resumeProps = {
    resumeUrl: string;

}

export default function MyResume({ resumeUrl }: resumeProps) {
    return (
        <div>
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer"></a>
        </div>
    );
}