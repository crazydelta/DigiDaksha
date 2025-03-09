import Navbar from '../Navbar';
import Footer from '../Footer';
import React, { useState } from 'react';
import styled from 'styled-components';
import { MessageSquare } from 'lucide-react';
import GlobalStyle from '../GlobalStyle';

const MainCont = styled.div`
  background-color: #000;
  padding: 0px;
`;

const FormContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
  background-color: #000;
  border-radius: 8px;
  

  @media (min-width: 768px) {
    padding: 4rem;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  letter-spacing: 3px;
  font-family: 'Bebas Neue', sans-serif;
  text-align: center;
  animation: fadeInUp 1.5s ease forwards;
  color: white;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (min-width: 768px) {
    font-size: 100px;
  }
`;

const Subtitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  font-size: 1.25rem;
  color: #cccccc;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    gap: 1rem;
  }
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.05rem;

  @media (min-width: 768px) {
    width: 30%;
  }
`;

const Input = styled.input`
  width: 80%;
  padding: 0.75rem;
  border: 2px solid #444444;
  border-radius: 40px;
  font-size: 1rem;
  background: #000;
  color: #ffffff;
  transition: all 0.2s ease-in-out;

  &:focus {
    outline: none;
    border-color: #ffffff;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.2);
  }
`;

const TextArea = styled.textarea`
  width: 80%;
  padding: 0.75rem;
  border: 2px solid #444444;
  border-radius: 40px;
  font-size: 1rem;
  resize: vertical;
  background: #000;
  color: #ffffff;
  transition: all 0.2s ease-in-out;

  &:focus {
    outline: none;
    border-color: #ffffff;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.2);
  }
`;

const SubmitButton = styled.button`
  width: 80%;
  padding: 1rem;
  background: #ffffff;
  color: #000000;
  border: none;
  border-radius: 40px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: black;
    color: white;
    transform: translateY(-2px);
    border-color: white;
    border-style: solid;
    border-width: 2px;
  }

  &:active {
    transform: translateY(0);
  }

  @media (min-width: 768px) {
    width: 50%;
    margin: 0 auto;
  }
`;

const PrivacyText = styled.p`
  text-align: center;
  font-size: 0.875rem;
  color: #cccccc;
  margin-top: 1rem;
`;

const PrivacyLink = styled.a`
  color: #ffffff;
  text-decoration: underline;
  cursor: pointer;
`;

const StatusMessage = styled.div`
  margin-top: 1rem;
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  color: ${(props) => {
    if (props.loading) return "gray"; 
    return props.error === "true" ? "red" : "green"; 
  }};
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [status, setStatus] = useState({ message: '', error: false });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ message: '', error: false });
    setLoading(true);

    const API_URL = 'https://digidakshalivemainserver.onrender.com';

    try {
      const response = await fetch(`${API_URL}/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      setLoading(false);

      if (response.ok) {
        setStatus({ message: 'Form submitted successfully!', error: false });
      } else {
        setStatus({
          message: 'Error submitting the form.',
          error: true
        });
      }
    } catch (error) {
      setLoading(false);
      setStatus({
        message: 'Error submitting the form. Please try again later.',
        error: true
      });
    }
  };

  return (
    <>
    <GlobalStyle/>
    <MainCont>
      <Navbar />
      <FormContainer>
        <Title>GET IN TOUCH</Title>
        <Subtitle>
          <span>Let's Get it Started</span>
          <MessageSquare size={24} color="#ffffff" />
        </Subtitle>

        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <div style={{width:'80%',textAlign:'start', marginBottom:'1rem'}}>
            <Label htmlFor="name">Name</Label>
            </div>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </FormGroup>

          <FormGroup>
            <div style={{width:'80%',textAlign:'start', marginBottom:'1rem'}}>
            <Label htmlFor="email">Email</Label>
            </div>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@example.com"
              required
            />
          </FormGroup>

          <FormGroup>
            <div style={{width:'80%',textAlign:'start', marginBottom:'1rem'}}>
            <Label htmlFor="company">Company Name</Label>
            </div>
            <Input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Enter company name"
            />
          </FormGroup>

          <FormGroup>
            <div style={{width:'80%',textAlign:'start', marginBottom:'1rem'}}>
            <Label htmlFor="message">Message</Label>
            </div>
            <TextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write anything"
              required
            />
          </FormGroup>

          <div style={{display:'flex' ,flexDirection:'column',width:'80%',alignItems: 'center',justifyContent: 'center'}}>
            {loading ? (
              <StatusMessage loading>Loading...</StatusMessage>
            ) : (
              <SubmitButton type="submit">SUBMIT FORM</SubmitButton>
            )}

            {status.message && (
              <StatusMessage error={status.error.toString()}>{status.message}</StatusMessage>
            )}
          </div>

          <PrivacyText>
            By Clicking "Submit" You Agree To Our{' '}
            <PrivacyLink>Privacy Policy</PrivacyLink>
          </PrivacyText>
        </Form>
      </FormContainer>
      <Footer />
    </MainCont>
    </>
  );
};

export default ContactForm;

