import React from "react";

type footerProps = {
  //  text: string;
    link: string;
}

export default function Footer({link }: footerProps) {
    return (
        <footer className="">
                
                <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                    {link}
                </a>
            
        </footer>
    );
}