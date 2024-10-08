const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
    personalInfo: {
        fullName: { type: String, required: true },
        email: { type: String, required: true },
        phone: String,
        address: String,
        dateOfBirth: Date,
        nationality: String,
    },
    education: [{
        degree: String,
        institution: String,
        graduationYear: Number,
        major: String,
    }],
    jobApplicationInfo: {
        position: String,
        expectedSalary: Number,
        startDate: Date,
        locationPreference: String,
        source: String,
    },
    professionalDetails: {
        currentTitle: String,
        skills: [String],
        certifications: [String],
        linkedin: String,
        website: String,
    },
    workExperience: [{
        company: String,
        role: String,
        duration: String,
        responsibilities: String,
    }],
    documents: {
        resume: String,
        coverLetter: String,
        portfolio: String,
    },
    interviewStatus: [{
        round: Number,
        feedback: String,
        date: Date,
    }],
    notes: [String],
    hiringStatus: {
        type: String,
        enum: ['submitted', 'under_review', 'interview_scheduled', 'offer_extended', 'rejected', 'hired'],
        default: 'submitted'
    }
});

module.exports = mongoose.model('Candidate', candidateSchema);