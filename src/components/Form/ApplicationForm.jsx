import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './ApplicationForm.module.scss';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    rollNo: '',
    email: '',
    branch: '',
    school: '',
    cgpa: '',
    researchExperience: '',
    publications: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Google Form submission URL
  const GOOGLE_FORM_ACTION_URL = 'YOUR_GOOGLE_FORM_URL';

  // Map form fields to Google Form field IDs
  const FORM_FIELD_IDS = {
    fullName: 'entry.123456789',
    rollNo: 'entry.987654321',
    email: 'entry.456789123',
    branch: 'entry.789123456',
    school: 'entry.321654987',
    cgpa: 'entry.159753468',
    researchExperience: 'entry.753159456',
    publications: 'entry.951357264'
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Name is required';
    }
    
    if (!formData.rollNo.trim()) {
      newErrors.rollNo = 'Roll Number is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!formData.branch.trim()) {
      newErrors.branch = 'Branch is required';
    }
    
    if (!formData.school.trim()) {
      newErrors.school = 'School is required';
    }
    
    if (!formData.cgpa.trim()) {
      newErrors.cgpa = 'CGPA is required';
    } else if (isNaN(formData.cgpa) || parseFloat(formData.cgpa) > 10) {
      newErrors.cgpa = 'Invalid CGPA';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Create FormData object for submission
      const formDataObj = new FormData();
      
      // Add form fields to FormData with Google Form field IDs
      Object.keys(formData).forEach(key => {
        formDataObj.append(FORM_FIELD_IDS[key], formData[key]);
      });

      // Submit to Google Form
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formDataObj
      });

      setSubmitSuccess(true);
      setFormData({
        fullName: '',
        rollNo: '',
        email: '',
        branch: '',
        school: '',
        cgpa: '',
        researchExperience: '',
        publications: ''
      });
    } catch (error) {
      console.error('Submission error:', error);
      setErrors({ submit: 'Failed to submit form. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <section className={styles.formSection}>
      <div className={styles.container}>
        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Apply for K-1000 Program
        </motion.h2>

        <motion.form 
          className={styles.form}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className={styles.formGroup}>
            <label className={styles.label}>Full Name *</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={styles.input}
              placeholder="Enter your full name"
            />
            {errors.fullName && <div className={styles.error}>{errors.fullName}</div>}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Roll Number *</label>
            <input
              type="text"
              name="rollNo"
              value={formData.rollNo}
              onChange={handleChange}
              className={styles.input}
              placeholder="Enter your roll number"
            />
            {errors.rollNo && <div className={styles.error}>{errors.rollNo}</div>}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
              placeholder="Enter your email"
            />
            {errors.email && <div className={styles.error}>{errors.email}</div>}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Branch *</label>
            <input
              type="text"
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              className={styles.input}
              placeholder="Enter your branch"
            />
            {errors.branch && <div className={styles.error}>{errors.branch}</div>}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>School *</label>
            <input
              type="text"
              name="school"
              value={formData.school}
              onChange={handleChange}
              className={styles.input}
              placeholder="Enter your school"
            />
            {errors.school && <div className={styles.error}>{errors.school}</div>}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>CGPA *</label>
            <input
              type="text"
              name="cgpa"
              value={formData.cgpa}
              onChange={handleChange}
              className={styles.input}
              placeholder="Enter your CGPA"
            />
            {errors.cgpa && <div className={styles.error}>{errors.cgpa}</div>}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Research Experience</label>
            <textarea
              name="researchExperience"
              value={formData.researchExperience}
              onChange={handleChange}
              className={styles.textarea}
              placeholder="Describe your research experience (if any)"
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Publications / Conference Papers</label>
            <textarea
              name="publications"
              value={formData.publications}
              onChange={handleChange}
              className={styles.textarea}
              placeholder="List your publications or conference papers (if any)"
            />
          </div>

          <button 
            type="submit" 
            className={styles.submitButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </button>

          {submitSuccess && (
            <div className={styles.success}>
              Application submitted successfully! We'll contact you soon.
            </div>
          )}

          {errors.submit && <div className={styles.error}>{errors.submit}</div>}
        </motion.form>
      </div>
    </section>
  );
};

export default ApplicationForm;