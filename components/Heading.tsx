const Heading = ({tag, text}: any) => {
    const Tag = tag || 'h1'
    return <Tag>{text}</Tag>
};

export default Heading;