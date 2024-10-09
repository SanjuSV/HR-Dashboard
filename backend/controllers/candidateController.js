const Candidate = require('../models/Candidate');

exports.addCandidate = async (req, res) => {
    try {
        const candidate = new Candidate({
            personalInfo: {
                fullName: req.body.personalInfo.fullName, 
                email: req.body.personalInfo.email,
                phone: req.body.personalInfo.phone,
                address: req.body.personalInfo.address,
                dateOfBirth: req.body.personalInfo.dateOfBirth,
                nationality: req.body.personalInfo.nationality,
            },
            education: req.body.education || [], 
            jobApplicationInfo: {
                position: req.body.jobApplicationInfo.position,
                expectedSalary: req.body.jobApplicationInfo.expectedSalary,
                startDate: req.body.jobApplicationInfo.startDate,
                locationPreference: req.body.jobApplicationInfo.locationPreference,
                source: req.body.jobApplicationInfo.source,
            },
            professionalDetails: {
                currentTitle: req.body.professionalDetails.currentTitle,
                skills: req.body.professionalDetails.skills || [], 
                certifications: req.body.professionalDetails.certifications || [], 
                linkedin: req.body.professionalDetails.linkedin,
                website: req.body.professionalDetails.website,
            },
            workExperience: req.body.workExperience || [], 
            documents: {
                resume: req.body.documents.resume,
                coverLetter: req.body.documents.coverLetter,
                portfolio: req.body.documents.portfolio,
            },
            interviewStatus: req.body.interviewStatus || [], 
            notes: req.body.notes || [], 
            hiringStatus: req.body.hiringStatus || 'submitted' 
        });

        await candidate.save();
        res.status(201).json({ message: 'Candidate added successfully', candidate }); 
    } catch (error) {
        res.status(400).json({ message: error.message }); 
    }
};

exports.getCandidates = async (req, res) => {
    try {
        const candidates = await Candidate.find(); 
        res.json(candidates); 
    } catch (error) {
        res.status(500).json({ message: error.message }); 
    }
};
