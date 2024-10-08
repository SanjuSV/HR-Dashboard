const Candidate = require('../models/Candidate');

exports.addCandidate = async (req, res) => {
    try {
        const candidate = new Candidate({
            personalInfo: {
                fullName: req.body.fullName,
                email: req.body.email,
                phone: req.body.phone,
                address: req.body.address,
                dateOfBirth: req.body.dateOfBirth,
                nationality: req.body.nationality,
            },
            education: req.body.education,
            jobApplicationInfo: {
                position: req.body.position,
                expectedSalary: req.body.expectedSalary,
                startDate: req.body.startDate,
                locationPreference: req.body.locationPreference,
                source: req.body.source,
            },
            professionalDetails: {
                currentTitle: req.body.currentTitle,
                skills: (req.body.skills || '').split(','),
                certifications: (req.body.certifications || '').split(','),
                linkedin: req.body.linkedin,
                website: req.body.website,
            },
            workExperience: req.body.workExperience,
            documents: {
                resume: req.body.resume,
                coverLetter: req.body.coverLetter,
                portfolio: req.body.portfolio,
            }
        });

        await candidate.save();
        res.redirect('/');
    } catch (error) {
        res.status(500).json({ message: error.message });
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