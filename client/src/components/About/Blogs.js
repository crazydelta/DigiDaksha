import styled from "styled-components";
import Dblog1 from '../../Assets/Dblog1.png';
import Dblog2 from '../../Assets/Dblog2.png';
import Dblog3 from '../../Assets/Dblog3.png';
import Dblog1PDF from '../../Assets/Dblog1.pdf';
import Dblog2PDF from '../../Assets/Dblog2.pdf';
import Blog3 from '../../Assets/Blog3.pdf';

const blogData = [
    {
        id: 1,
        image: Dblog1,
        description: "7 Reasons Why Digital Marketing is Important for Your Business",
        pdf: Dblog1PDF
    },
    {
        id: 2,
        image: Dblog2,
        description: "The Digi Daksha Promise - Empower Your Brand Digitally",
        pdf: Dblog2PDF
    },
    {
        id: 3,
        image: Dblog3,
        description: "Digital Marketing: Fairy Tales vs. Real Deals",
        pdf: Blog3
    },
    // Add more blog entries as needed
];

const Blogs = () => {
    const openBlogInNewTab = (pdfFile) => {
        window.open(`${pdfFile}#toolbar=0`, '_blank'); // Open the PDF in a new tab
    };

    return (
        <>
            <h1 style={{ textAlign: 'center' ,fontFamily: 'Bebas Neue',letterSpacing:'3px',fontSize:'70px',marginLeft:'28px'}}>Blogs</h1>
            <BlogsCont>
                {blogData.map(blog => (
                    <BlogCard key={blog.id}>
                        <BlogImg src={blog.image} alt={`Blog ${blog.id}`} />
                        <CardItem style={{ padding: '10px' }}>
                            <p>{blog.description}</p>
                            <Btnn onClick={() => openBlogInNewTab(blog.pdf)}>
                                <p>Read More {">"}</p>
                            </Btnn>
                        </CardItem>
                    </BlogCard>
                ))}
            </BlogsCont>
        </>
    );
};

export default Blogs;

const BlogsCont = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    gap: 20px;
    justify-content: center;
    align-items: center;
    margin: 20px;
`;

const BlogCard = styled.div`
    min-height: 300px;
    width: fit-content;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    @media (min-width: 768px) {
        min-height: 300px;
        width: 300px;
    }
`;

const CardItem = styled.div`
    padding: 10px;
    background-color: transparent;
`;

const BlogImg = styled.img`
    width: 100%;
    height: 70%;
`;

const Btnn = styled.button`
    background-color: transparent;
    color: grey;
    font-weight: bold;
    border: none; // Use 'none' instead of '0px' for clarity
    cursor: pointer;
    transition: color 0.3s; // Add transition for hover effect

    &:hover {
        color: darkblue; // Change color on hover
    }
`;