const Footer: React.FC = () => {
    const date = new Date().getFullYear()

    return (
        <footer>
            <p>
                {`${date} @ `}
                <a href='https://rurbanski.pl' target='_blank'>
                    Robert Urbański
                    <br />
                    Strony i Aplikacje Internetowe
                </a>
            </p>
            {/* <div id='width'>{win}</div> */}
        </footer>
    )
}

export default Footer
