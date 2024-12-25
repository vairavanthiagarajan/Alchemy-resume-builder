document.addEventListener("DOMContentLoaded", function () {
    const skillsSection = document.getElementById("skillsSection");
    const addSkillButton = document.getElementById("addSkillButton");
    const maxSkills = 12;
    const removeSkillButton = document.getElementById('removeSkill');
    const minSkill = 4;
    const addExp = document.getElementById('addExpButton');
    const removeExp = document.getElementById('removeExp');
    const minExp = 1;
    const maxExp = 2;
    const downloadResume = document.getElementById('downloadResume');
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
          alert("You cannot add more than 2 experiences.");
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
              <h3 style="font-size: 0.9rem; font-weight: 700; color: #111; padding-top: 15px;">${exp.position}</h3> 
              <p style="font-size: 0.875rem; color: #4b5563; font-style: italic;">${exp.company} | ${exp.start} to ${exp.end} </p>
              <ul style="list-style: disc; margin-left: 1rem; font-size: 0.875rem; color: #374151;">${exp.description}</ul>   
          </section>
        `).join('');
        const additionalInfoSection = languages || certifications || extracurricular
        ? `
        <section class="additional-info">
            <h2 style="font-size: 1 rem; font-weight: 700; background: #e5e7eb; padding: 1.5px; color: #1f2937; letter-spacing: 1px;">ADDITIONAL INFORMATION</h2>
            <ul style="list-style: disc; margin-left: 1rem; font-size: 0.875rem; color: #374151; padding-top: 15px;">
              ${languages ? `<li>Languages Known: ${languages}</li>` : ""}
              ${certifications ? `<li>Certifications: ${certifications}</li>` : ""}
              ${extracurricular ? `<li>Extra-Curricular: ${extracurricular}</li>` : ""}
            </ul>
        </section>
        `
        : "";
        const resumeContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Resume</title>
        <!--fonts-->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
        <!--fonts-->
        <link rel="stylesheet" href="style.css">
        </head>
        <body>
        <div style="max-width: 56rem; margin: auto; background: #fff; border-radius: 0.5rem; font-family: Arial, sans-serif; color: #1f2937;">
        <div style="text-align: center; margin-bottom: 1.5rem;">
          <h1 style="font-size: 2rem; font-weight: 900; color: #111;">${name}</h1>
          <p style="font-size: 0.875rem; color: #6b7280;">${phone} | ${email} | ${city}</p>
        </div>
        <section style="margin-bottom: 1.5rem;">
          <h2 style="font-size: 1 rem; font-weight: 700; background: #e5e7eb; padding: 1.5px; color: #1f2937; letter-spacing: 1px;">SUMMARY</h2>
          <p style="text-align: justify; padding-top: 15px; font-size: 0.875rem; color: #374151;">${summary}</p>
        </section>
        <section class="skills" style="margin-bottom: 1.5rem;">
          <h2 style="font-size: 1 rem; font-weight: 700; background: #e5e7eb; padding: 1.5px; color: #1f2937; letter-spacing: 1px;">SKILLS</h2>
          <ul style="padding-top: 15px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.5rem; font-size: 0.875rem; color: #374151;">
              ${skills.map(skill => `<li>${skill}</li>`).join('')}
          </ul>
        </section>
        <section class="experience">
          <h2 style="font-size: 1rem; font-weight: 700; background: #e5e7eb; padding: 1.5px; color: #1f2937; letter-spacing: 1px;">PROFESSIONAL EXPERIENCE</h2>
          ${experienceSection}
        </section>
        <br>
        <section class="education" style="margin-bottom: 1.5rem;">
          <h2 style="font-size: 1 rem; font-weight: 700; background: #e5e7eb; padding: 1.5px; color: #1f2937; letter-spacing: 1px;">EDUCATION</h2>
          <p style="padding-top: 15px; font-size: 0.9rem; font-weight: 700; "> ${degree}, ${edinstitution} </p> <p style="font-size: 0.875rem; color: #4b5563; font-style: italic"> (${edstart} - ${edend}) </p>
          <p style="font-size: 0.875rem; color: #4b5563;">Percentage: ${edpercentage}%</p>
          <br>
          <p style="font-size: 0.9rem; font-weight: 700; ">Higher Secondary, ${edinstitution1} </p> <p style="font-size: 0.875rem; color: #4b5563; font-style: italic"> (${edstart1} - ${edend1}) </p> <p style="font-size: 0.875rem; color: #4b5563;">Percentage: ${edpercentage1}%</p>
        </section>
        ${additionalInfoSection}
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.2/html2pdf.bundle.min.js"></script>
        </body>
        </html>
        `;
        const element = document.createElement('div');
        element.innerHTML = resumeContent;
        document.body.appendChild(element);
        setTimeout(() => {
            const options = {
            margin: 0.5,
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