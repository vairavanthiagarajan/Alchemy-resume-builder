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
    const maxExp = 3;
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
    addExp.addEventListener("click", function (event) {
        event.preventDefault();
        const currentExpCount = document.getElementById('experienceSection').querySelectorAll('input[id^="company"]').length;
        if (currentExpCount >= maxExp) {
            alert("You cannot add more than 3 experiences.");
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
        const edinstitution = document.getElementById('ed-institution').value;
        const degree = document.getElementById('degree').value;
        const edstart = document.getElementById('ed-start').value;
        const edend = document.getElementById('ed-end').value;
        const edpercentage = document.getElementById('ed-percentage').value;
        const edinstitution1 = document.getElementById('ed-institution-1').value;
        const edstart1 = document.getElementById('ed-start1').value;
        const edend1 = document.getElementById('ed-end1').value;
        const edpercentage1 = document.getElementById('ed-percentage-1').value;
        const summary = document.getElementById('summary').value;
        const certifications = document.getElementById('certifications').value;
        const languages = document.getElementById('languages').value;
        const extracurricular = document.getElementById('extra-curricular').value;
        const firstExperience = experiences[0] || {};
        if (!name || !email || !phone || !city || skills.length < minSkill || !firstExperience.company || !firstExperience.position || !edinstitution || !edstart1 || !edend1 || !edpercentage1 || !degree || !edstart || !edend || !edpercentage || !summary || !edinstitution1 || !edstart1 || !edend1 || !edpercentage1) {
            alert("Please fill out all the required fields before downloading the resume.");
            return;
        }
        if (skills.some(skill => skill === "")) {
            alert("Please ensure all skill fields are filled.");
            return;
        }
        const experienceSection = experiences.map(exp => `
            <div style="margin-top: 15px;">
                <h3 style="font-size: 0.9375rem; font-weight: 700; color: #374151;">${exp.position}</h3>
                <p style="font-style: italic; color: #6b7280;">${exp.company} | ${exp.start} to ${exp.end}</p>
                <p style="margin-top: 4px; line-height: 1.625; color: #4b5563; font-size: 0.9rem">${exp.description}</p>
            </div>
        `).join('');
        const additionalInfoSection = languages || certifications || extracurricular
        ? `
        <div>
            <h2 style="border-bottom: 2px solid #d1d5db; padding-bottom: 8px; font-size: 1.1875rem; font-weight: 600; color: #1f2937;">Additional Information</h2>
            <p style="margin-top: 15px; line-height: 1.625; color: #4b5563;">
            ${languages ? `<span style="font-weight: 700;">Languages Known:</span> ${languages}` : ""} <br> 
            ${certifications ? `<span style="font-weight: 700;">Certifications:</span> ${certifications}` : ""} <br>
            ${extracurricular ? `<span style="font-weight: 700;">Extra-Curricular:</span> ${extracurricular}` : ""}
            </p>
        </div>
        `
        : "";
        const resumeContent = `
        <!doctype html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>TEMPLATE-2-RESUME</title>
          </head>
          <body style="background-color: #f3f4f6;">
            <div style="margin: 0 auto; max-width: 1024px; background-color: #f9fafb;">
              <!-- Header Section -->
              <div style="border-bottom: 2px solid #d1d5db; padding: 40px 40px 20px; background-color: #4b5563; color: #ffffff;">
                <h1 style="font-size: 2.375rem; font-weight: 700;">${name}</h1>
                <p style="margin-top: 8px; font-size: 0.9375rem;">${phone} | ${email} | ${city}</p>
              </div>
              <!-- Main Content Section -->
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 32px;">
                <!-- Left Column -->
                <div style="background-color: #e5e7eb; padding: 30px 30px;">
                  <!-- Work Experience -->
                  <div style="margin-bottom: 30px;">
                    <h2 style="border-bottom: 2px solid #Ffffff; padding-bottom: 8px; font-size: 1.1875rem; font-weight: 600; color: #1f2937;">Work Experience</h2>
                    ${experienceSection}
                  </div>
                  <!-- Education -->
                  <div>
                    <h2 style="border-bottom: 2px solid #Ffffff; padding-bottom: 8px; font-size: 1.1875rem; font-weight: 600; color: #1f2937;">Educational Background</h2>
                    <div style="margin-top: 15px;">
                      <h3 style="font-size: 0.9375rem; font-weight: 700; color: #374151;">${edinstitution}</h3>
                      <p style="font-style: italic; color: #6b7280;">${degree} (${edstart} - ${edend})</p>
                      <p style="font-style: italic; color: #6b7280;">Percentage: ${edpercentage}</p>
                    </div>
                    <div style="margin-top: 22px;">
                      <h3 style="font-size: 0.9375rem; font-weight: 700; color: #374151;">Higher Secondary, ${edinstitution1}</h3>
                      <p style="font-style: italic; color: #6b7280;">(${edstart1} - ${edend1})</p>
                      <p style="color: #4b5563;">Percentage: ${edpercentage1}%</p>
                    </div>
                  </div>
                </div>
                <!-- Right Column -->
                <div style="padding-top: 32px; padding-bottom: 32px; padding-right: 32px;">
                  <!-- Professional Summary -->
                  <div style="margin-bottom: 30px;">
                    <h2 style="border-bottom: 2px solid #Ffffff; padding-bottom: 8px; font-size: 1.1875rem; font-weight: 600; color: #1f2937;">Professional Summary</h2>
                    <p style="margin-top: 15px; line-height: 1.625; color: #4b5563;">${summary}</p>
                  </div>
                  <!-- Skills & Proficiencies -->
                  <div style="margin-bottom: 30px;">
                    <h2 style="border-bottom: 2px solid #d1d5db; padding-bottom: 8px; font-size: 1.1875rem; font-weight: 600; color: #1f2937;">Skills & Proficiencies</h2>
                    <ul style="margin-top: 15px; list-style-type: disc; padding-left: 20px; color: #4b5563; line-height: 1.625;">
                        ${skills.map(skill => `<li>${skill}</li>`).join('')}
                    </ul>
                  </div>
                  <!-- Additional Information -->
                  ${additionalInfoSection}
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