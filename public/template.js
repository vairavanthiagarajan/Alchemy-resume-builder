document.addEventListener("DOMContentLoaded", function () {
    const skillsSection = document.getElementById("skillsSection");
    const addSkillButton = document.getElementById("addSkillButton");
    const maxSkills = 12;
    const removeSkillButton = document.getElementById('removeSkill');
    const minSkill = 4;
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
    downloadResume.addEventListener("click", function (event) {
        event.preventDefault();
        const name = document.getElementById('name').value.toUpperCase();
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const city = document.getElementById('city').value;
        const skills = skillsSection ? Array.from(skillsSection.querySelectorAll("input")).map(input => input.value) : [];
        const company1 = document.getElementById('company1').value;
        const position1 = document.getElementById('position1').value;
        const exstart1 = document.getElementById('ex-start1').value;
        const exend1 = document.getElementById('ex-end1').value;
        const description1 = document.getElementById('description1').value;
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
        <div style="max-width: 56rem; margin: auto; background: #fff; padding: 0.5rem; border-radius: 0.5rem; font-family: Arial, sans-serif; color: #1f2937;">
        <div style="text-align: center; margin-bottom: 1.5rem;">
          <h1 style="font-size: 2rem; font-weight: 900; color: #111;">${name}</h1>
          <p style="font-size: 0.875rem; color: #6b7280;">${phone} | ${email} | ${city}</p>
        </div>
        <section style="margin-bottom: 1.5rem;">
          <h2 style="font-size: 1.25rem; font-weight: 700; background: #e5e7eb; padding: 1.5px; color: #1f2937;">SUMMARY</h2>
          <p style="text-align: justify; padding-top: 15px; font-size: 0.875rem; color: #374151;">${summary}</p>
        </section>
        <section class="skills" style="margin-bottom: 1.5rem;">
          <h2 style="font-size: 1.25rem; font-weight: 700; background: #e5e7eb; padding: 1.5px; color: #1f2937;">SKILLS</h2>
          <ul style="padding-top: 15px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.5rem; font-size: 0.875rem; color: #374151;">
              ${skills.map(skill => `<li>${skill}</li>`).join('')}
          </ul>
        </section>
        <section class="experience" style="margin-bottom: 1.5rem;">
          <h2 style="font-size: 1.25rem; font-weight: 700; background: #e5e7eb; padding: 1.5px; color: #1f2937;">PROFESSIONAL EXPERIENCE</h2>
          <h3 style="font-size: 1rem; font-weight: 700; color: #111; padding-top: 15px;">${position1}, ${company1}</h3>
          <p style="font-size: 0.875rem; color: #4b5563;">${exstart1} - ${exend1}</p>
          <ul style="list-style: disc; margin-left: 1rem; font-size: 0.875rem; color: #374151;">
            <li>${description1}</li>
          </ul>
        </section>
        <section class="education" style="margin-bottom: 1.5rem;">
          <h2 style="font-size: 1.25rem; font-weight: 700; background: #e5e7eb; padding: 1.5px; color: #1f2937;">EDUCATION</h2>
          <p style="padding-top: 15px; font-size: 1rem; font-weight: 700; "> ${degree}, ${edinstitution} </p> <p style="font-size: 0.875rem; color: #4b5563;"> (${edstart} - ${edend}) </p>
          <p style="font-size: 0.875rem; color: #4b5563;">Percentage: ${edpercentage}%</p>
          <br>
          <p style="font-size: 1rem; font-weight: 700; ">Higher Secondary, ${edinstitution1} </p> <p style="font-size: 0.875rem; color: #4b5563;"> (${edstart1} - ${edend1}) </p> <p style="font-size: 0.875rem; color: #4b5563;">Percentage: ${edpercentage1}%</p>
        </section>
        <section class="additional-info">
          <h2 style="font-size: 1.25rem; font-weight: 700; background: #e5e7eb; padding: 1.5px; color: #1f2937;">ADDITIONAL INFORMATION</h2>
          <ul style="list-style: disc; margin-left: 1rem; font-size: 0.875rem; color: #374151; padding-top: 15px;">
            <li>Languages: ${languages}</li>
            <li>Certifications: ${certifications}</li>
            <li>Extra-Curricular: ${extracurricular}</li>
          </ul>
        </section>
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
            filename: 'resume.pdf',
            image: { type: 'jpeg', quality: 1 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        html2pdf().set(options).from(element).save().finally(() => {
            document.body.removeChild(element);
        });
    }, 500);
});
});