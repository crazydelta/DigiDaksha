import Navbar from '../Navbar';
import Footer from '../Footer';
import React, { useState } from 'react';
import styled from 'styled-components';
import { MessageSquare } from 'lucide-react';

const MainCont = styled.div`
  background-color: #000;
  padding: 0px;
`;

const FormContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 4rem 4rem;
  background-color: #000; /* Dark background */
  border-radius: 0px; /* Optional: Add some rounding to the container */
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 300; /* Use a valid weight value */
  font-family: 'Bebas Neue', sans-serif; /* Ensure the font is properly defined */
  text-align: center;
  animation: fadeInUp 1.5s ease forwards; /* Apply the animation */
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
    font-weight: bold; /* This will apply bold weight */
  }
`;

const Subtitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 3rem;
  font-size: 1.25rem;
  color: #cccccc; /* Lighter gray for subtitle */
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Label = styled.label`
  font-size: 1.125rem;
  font-weight: 600;
  color: #ffffff; /* Light text color */
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 2px solid #444444; /* Darker border */
  border-radius: 40px;
  font-size: 1rem;
  background: #000; /* Dark input background */
  color: #ffffff; /* Light text color */
  transition: all 0.2s ease-in-out;

  &:focus {
    outline: none;
    border-color: #ffffff; /* Light border on focus */
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.2); /* Light shadow on focus */
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 2px solid #444444; /* Darker border */
  border-radius: 40px;
  font-size: 1rem;
  min-height: 50px;
  resize: vertical;
  background: #000; /* Dark textarea background */
  color: #ffffff; /* Light text color */
  transition: all 0.2s ease-in-out;

  &:focus {
    outline: none;
    border-color: #ffffff; /* Light border on focus */
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.2); /* Light shadow on focus */
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: #ffffff; /* Light button background */
  color: #000000; /* Dark text color */
  border: none;
  border-radius: 40px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #e0e0e0; /* Light gray on hover */
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const PrivacyText = styled.p`
  text-align: center;
  font-size: 0.875rem;
  color: #cccccc; /* Lighter gray for privacy text */
  margin-top: 1rem;
`;

const PrivacyLink = styled.a`
  color: #ffffff; /* Light text color for link */
  text-decoration: underline;
  cursor: pointer;
`;

const StatusMessage = styled.div`
  margin-top: 1rem;
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  color: ${(props) => (props.error ? 'red' : 'white')};
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [status, setStatus] = useState({ message: '', error: false });
  const [loading, setLoading] = useState(false); // Loading state

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
    setLoading(true); // Start loading

    try {
      const response = await fetch('http://localhost:5000/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      setLoading(false); // Stop loading after response

      if (response.ok) {
        setStatus({ message: 'Form submitted successfully!', error: false });
      } else {
        setStatus({
          message: result.message || 'Error submitting the form.',
          error: true
        });
      }
    } catch (error) {
      setLoading(false); // Stop loading after error
      setStatus({
        message: 'Error submitting the form. Please try again later.',
        error: true
      });
    }
  };

  return (
    <MainCont>
      <Navbar />
      <FormContainer>
        <Title>GET IN TOUCH</Title>
        <Subtitle>
          <span>Let's Get it Started</span>
          <MessageSquare size={24} color="#ffffff" />
        </Subtitle>

        <Form onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@example.com"
              required
            />
          </div>

          <div>
            <Label htmlFor="company">Company Name</Label>
            <Input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Enter company name"
            />
          </div>

          <div>
            <Label htmlFor="message">Message</Label>
            <TextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write anything"
              required
            />
          </div>

          {loading ? (
            <StatusMessage>Loading...</StatusMessage>
          ) : (
            <SubmitButton type="submit">SUBMIT FORM</SubmitButton>
          )}

          {status.message && (
            <StatusMessage error={status.error}>{status.message}</StatusMessage>
          )}

          <PrivacyText>
            By Clicking "Submit Non-Bindingly" You Agree To Our{' '}
            <PrivacyLink>Privacy Policy</PrivacyLink>
          </PrivacyText>
        </Form>
      </FormContainer>
      <Footer />
    </MainCont>
  );
};

export default ContactForm;
