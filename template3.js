document.addEventListener("DOMContentLoaded", function () {
    const skillsSection = document.getElementById("skillsSection");
    const addSkillButton = document.getElementById("addSkillButton");
    const maxSkills = 12;
    const removeSkillButton = document.getElementById('removeSkill');
    const minSkill = 4;
    const downloadResume = document.getElementById('downloadResume');
    const addExp = document.getElementById('addExpButton');
    const removeExp = document.getElementById('removeExp');
    const minExp = 1;
    const maxExp = 4;
    const minEd = 1;
    const maxEd = 4;
    const educationSection = document.getElementById('educationSection');
    const addEducationButton = document.getElementById('addEdButton');
    const removeEducationButton = document.getElementById('removeEd');
    addSkillButton.addEventListener("click", function (event) {
      event.preventDefault(); 
      const currentSkillsCount = skillsSection.querySelectorAll("input").length;
        if (currentSkillsCount >= maxSkills) {
            alert("You cannot add more than 12 skills.");
            return;
        }
      const skillCount = currentSkillsCount + 1;
      const newSkill = document.createElement("div");
      newSkill.className = "flex flex-col gap-5";
      newSkill.innerHTML = `
        <label for="skill${skillCount}" class="block text-gray-700 text-sm font-medium font-raleway">Skill ${skillCount}</label>
        <input type="text" id="skill${skillCount}" name="skill${skillCount}" required class="w-full p-4 bg-purple-50 border-2 border-black focus:outline-violet-500 sm:text-sm" placeholder="New Skill">
      `;
      skillsSection.appendChild(newSkill);
    });
    removeSkillButton.addEventListener("click", function (event) {
        event.preventDefault();
        const currentSkillsCount = skillsSection.querySelectorAll("input").length;
        if (currentSkillsCount <= minSkill) {
            alert("You cannot remove less than 4 skills.");
            return;
        }
        skillsSection.removeChild(skillsSection.lastChild);
    });
    addEducationButton.addEventListener("click", function (event) {
        event.preventDefault();
        const currentEducationCount = educationSection.querySelectorAll('input[id^="edinstitution"]').length;
        if (currentEducationCount >= maxEd) {
            alert("You cannot add more than 4 educations.");
            return;
        }
        const edCount = currentEducationCount + 1;
        const newEd = document.createElement("div");
        newEd.className = "grid grid-cols-1 md:grid-cols-2 gap-6 pt-5";
        newEd.innerHTML = `
        <div class="flex flex-col gap-5">
            <label for="institution" class="block text-gray-700 text-sm font-medium font-raleway">Institution</label>
            <input type="text" id="edinstitution${edCount}" name="institution"  class="w-full p-3 md:p-4 bg-purple-50 border-2 border-black focus:outline-violet-500 sm:text-sm" placeholder="XYZ University">
        </div>
        <div class="flex flex-col gap-5">
            <label for="degree" class="block text-gray-700 text-sm font-medium font-raleway">Degree</label>
            <input type="text" id="degree${edCount}" name="degree"  class="w-full p-3 md:p-4 bg-purple-50 border-2 border-black focus:outline-violet-500 sm:text-sm" placeholder="Bachelor's Degree">
        </div>
        <div class="flex flex-col gap-5">
            <label for="start2" class="block text-gray-700 text-sm font-medium font-raleway">Start Date</label>
            <input type="text" id="ed-start${edCount}" name="start"  class="w-full p-3 md:p-4 bg-purple-50 border-2 border-black focus:outline-violet-500 sm:text-sm" placeholder="Jan 2024">
        </div>
        <div class="flex flex-col gap-5">
            <label for="end2" class="block text-gray-700 text-sm font-medium font-raleway">End Date</label>
            <input type="text" id="ed-end${edCount}" name="end" class="w-full p-3 md:p-4 bg-purple-50 border-2 border-black focus:outline-violet-500 sm:text-sm" placeholder="Present">
        </div>
        <div class="flex flex-col gap-5">
            <label for="percentage" class="block text-gray-700 text-sm font-medium font-raleway">Percentage</label>
            <input type="text" id="ed-percentage${edCount}" name="percentage1"  class="w-full p-3 md:p-4 bg-purple-50 border-2 border-black focus:outline-violet-500 sm:text-sm" placeholder="Computer Science">
        </div> 
        `;
        educationSection.appendChild(newEd);
    });
    removeEducationButton.addEventListener("click", function (event) {
        event.preventDefault();
        const currentEducationCount = educationSection.querySelectorAll('input[id^="edinstitution"]').length;
        if (currentEducationCount <= minEd) {
            alert("You cannot remove less than 1 educations.");
            return;
        }
        educationSection.removeChild(educationSection.lastChild);
    });
    addExp.addEventListener("click", function (event) {
        event.preventDefault();
        const currentExpCount = document.getElementById('experienceSection').querySelectorAll('input[id^="company"]').length;
        if (currentExpCount >= maxExp) {
            alert("You cannot add more than 4 experiences.");
            return;
        }
        const expCount = currentExpCount + 1;
        const newExp = document.createElement("div");
        newExp.className = "grid grid-cols-1 md:grid-cols-2 gap-6 pt-5";
        newExp.innerHTML = `
        <div class="flex flex-col gap-5">
            <label for="company${expCount}" class="block text-gray-700 text-sm font-medium font-raleway">Company ${expCount}</label>
            <input type="text" id="company${expCount}" name="company${expCount}" class="w-full p-3 md:p-4 bg-purple-50 border-2 border-black focus:outline-violet-500 sm:text-sm" placeholder="XYZ Corp.">
            </div>
            <div class="flex flex-col gap-5">
                <label for="position${expCount}" class="block text-gray-700 text-sm font-medium font-raleway">Position</label>
                <input type="text" id="position${expCount}" name="position${expCount}" class="w-full p-3 md:p-4 bg-purple-50 border-2 border-black focus:outline-violet-500 sm:text-sm" placeholder="Software Engineer">
            </div>
            <div class="flex flex-col gap-5">
                <label for="ex-start${expCount}" class="block text-gray-700 text-sm font-medium font-raleway">Start Date</label>
                <input type="text" id="ex-start${expCount}" name="ex-start${expCount}" class="w-full p-3 md:p-4 bg-purple-50 border-2 border-black focus:outline-violet-500 sm:text-sm" placeholder="Jan 2024">
            </div>
            <div class="flex flex-col gap-5">
                <label for="ex-end${expCount}" class="block text-gray-700 text-sm font-medium font-raleway">End Date</label>
                <input type="text" id="ex-end${expCount}" name="ex-end${expCount}" class="w-full p-3 md:p-4 bg-purple-50 border-2 border-black focus:outline-violet-500 sm:text-sm" placeholder="Present">
            </div>
            <div class="flex flex-col gap-5 ">
                <label for="description${expCount}" class="block text-gray-700 text-sm font-medium font-raleway">Description</label>
                <input type="text" id="description${expCount}" name="description${expCount}" class="w-full p-3 md:p-4 bg-purple-50 border-2 border-black focus:outline-violet-500 sm:text-sm" placeholder="Explain your role at the company">
            </div>
            <br class="hidden md:block">
        </div>
        `;
        document.getElementById('experienceSection').appendChild(newExp);
    });
    removeExp.addEventListener("click", function (event) {
        event.preventDefault();
        const currentExpCount = document.getElementById('experienceSection').querySelectorAll('input[id^="company"]').length;
        if (currentExpCount <= minExp) {
            alert("You cannot remove less than 1 experience.");
            return;
        }
        document.getElementById('experienceSection').removeChild(document.getElementById('experienceSection').lastChild);
    });
    downloadResume.addEventListener("click", function (event) {
        event.preventDefault();
        const name = document.getElementById('name').value.toUpperCase();
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const city = document.getElementById('city').value;
        const skills = skillsSection ? Array.from(skillsSection.querySelectorAll("input")).map(input => input.value) : [];
        const experiences = Array.from(document.querySelectorAll('input[id^="company"]')).map((companyInput, index) => {
            const position = document.getElementById(`position${index + 1}`)?.value || '';
            const exStart = document.getElementById(`ex-start${index + 1}`)?.value || '';
            const exEnd = document.getElementById(`ex-end${index + 1}`)?.value || '';
            const description = document.getElementById(`description${index + 1}`)?.value || '';
            return {
                company: companyInput.value,
                position: position,
                start: exStart,
                end: exEnd,
                description: description,
            };
        });
        const education = Array.from(document.querySelectorAll('input[id^="edinstitution"]')).map((edInput, index) => {
            const institution = document.getElementById(`edinstitution${index + 1}`)?.value || '';
            const degree = document.getElementById(`degree${index + 1}`)?.value || '';
            const start = document.getElementById(`ed-start${index + 1}`)?.value || '';
            const end = document.getElementById(`ed-end${index + 1}`)?.value || '';
            const percentage = document.getElementById(`ed-percentage${index + 1}`)?.value || '';
            return {
                institution: institution,
                degree: degree,
                start: start,
                end: end,
                percentage: percentage,
            };
        });
        const summary = document.getElementById('summary').value;
        const certifications = document.getElementById('certifications').value;
        const languages = document.getElementById('languages').value;
        const extracurricular = document.getElementById('extra-curricular').value;
        const firstExperience = experiences[0] || {};
        const firstEducation = education[0] || {};
        if (!name || !email || !phone || !city || skills.length < minSkill || 
            !firstExperience.company || !firstExperience.position || 
            !firstEducation.institution || !firstEducation.start || 
            !firstEducation.end || !firstEducation.percentage || 
            !summary) {
            alert("Please fill out all the required fields before downloading the resume.");
            return;
        }
        if (skills.some(skill => skill === "")) {
            alert("Please ensure all skill fields are filled.");
            return;
        }
        const experienceSection = experiences.map(exp => `
            <div style="color: #4b5563; margin-bottom: 1rem;">
                <p><span style="font-weight: 700;">${exp.position}</span>, ${exp.company}</p>
                <p style="font-style: italic;">${exp.start} to ${exp.end}</p>
                <p>${exp.description}</p>
            </div>
        `).join('');
        const educationSection = education.map(ed => `
            <div style="color: #4b5563; margin-bottom: 1rem;">
                <p><span style="font-weight: 700;">${ed.degree}</span>, ${ed.institution}</p>
                <p style="font-style: italic;">${ed.start} to ${ed.end}</p>
                <p>${ed.percentage}%</p>
            </div>
        `).join('');
        const additionalInfoSection = languages || certifications || extracurricular
        ? `
        <div style="margin-bottom: 1.5rem;">
            <h2 style="font-size: 1.25rem; font-weight: 600; color: #1f2937; margin-bottom: 0.5rem;">Skills & Proficiencies</h2>
            <ul style="list-style-type: disc; padding-left: 1.5rem; color: #4b5563;">
                ${languages ? `<li><span style="font-weight: 700;">Languages Known:</span> ${languages}</li>`: ""}
                ${certifications ? `<li><span style="font-weight: 700;">Certifications:</span> ${certifications}</li>`: ""}
                ${extracurricular ? `<li><span style="font-weight: 700;">Extra-Curricular:</span> ${extracurricular}</li>`: ""}
            </ul>
        </div>
        `
        : "";
        const resumeContent = `
        <!doctype html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>TEMPLATE-3-RESUME</title>
          </head>
          <body style="background-color: #f3f4f6;">
            <div style="margin: 0 auto; max-width: 1024px;">
              <!-- Header -->
                <div style="background-color: #525252; margin-bottom: 2rem; color: white; padding: 2.5rem;">
                    <h1 style="font-size: 1.875rem; font-weight: bold;">${name}</h1>
                    <p>${phone} | ${email} | ${city}</p>
                    <p style="margin-top: 1rem;">${summary}</p>
                </div>
        
                <!-- Main Content -->
                <div style="display: grid; grid-template-columns: 1fr 2fr; gap: 2rem; padding: 2.5rem; padding-top: 0;">
                    <!-- Left Column -->
                    <div>
                        <!-- Educational Background -->
                        <div style="margin-bottom: 1.5rem;">
                            <h2 style="font-size: 1.25rem; font-weight: 600; color: #1f2937; margin-bottom: 0.5rem;">Educational Background</h2>
                            ${educationSection}
                        </div>
        
                        <!-- Skills & Proficiencies -->
                        <div style="margin-bottom: 1.5rem;">
                            <h2 style="font-size: 1.25rem; font-weight: 600; color: #1f2937; margin-bottom: 0.5rem;">Skills & Proficiencies</h2>
                            <ul style="list-style-type: disc; padding-left: 1.5rem; color: #4b5563;">
                                ${skills.map(skill => `<li>${skill}</li>`).join('')}
                            </ul>
                        </div>
        
                    </div>
        
                    <!-- Right Column -->
                    <div>
                        <!-- Work Experience -->
                        <div style="margin-bottom: 1.5rem;">
                            <h2 style="font-size: 1.25rem; font-weight: 600; color: #1f2937; margin-bottom: 0.5rem;">Work Experience</h2>
                            ${experienceSection}
                        </div>
        
                        <!-- Volunteer Work & Certification -->
                        <div>
                            ${additionalInfoSection}
                        </div>
                    </div>
                </div>
            </div>
          </body>
        </html>
        `;
        const element = document.createElement('div');
        element.innerHTML = resumeContent;
        document.body.appendChild(element);
        setTimeout(() => {
            const options = {
            filename: 'Resume.pdf',
            image: { type: 'png', quality: 1 },
            html2canvas: { scale: 3 },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        };
        html2pdf().set(options).from(element).save().finally(() => {
            document.body.removeChild(element);
        });
    }, 500);
});
});