function submitForm(event) {
    event.preventDefault();
  
    // Lấy dữ liệu từ các trường nhập liệu
    const studentId = document.getElementById('student-id').value;
    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const genderElements = document.getElementsByName('gender');
    let gender = '';
    for (const element of genderElements) {
      if (element.checked) {
        gender = element.value;
        break;
      }
    }
    const nationality = document.getElementById('nationality').value;
    const note = document.getElementById('note').value;
  
    // Kiểm tra điều kiện yêu cầu
    if (!studentId || !fullName || !email) {
      alert('Vui lòng nhập đầy đủ mã, họ tên và email.');
      return;
    }
  
    if (!isValidEmail(email)) {
      alert('Vui lòng nhập đúng định dạng email.');
      return;
    }
  
    if (!gender) {
      alert('Vui lòng chọn giới tính.');
      return;
    }
  
    if (!nationality) {
      alert('Vui lòng chọn quốc tịch.');
      return;
    }
  
    if (note.length > 200) {
      alert('Ghi chú phải ít hơn 200 ký tự.');
      return;
    }
  
    // Hiển thị thông tin đăng ký
    alert(`Mã sinh viên: ${studentId}\nHọ và tên: ${fullName}\nEmail: ${email}\nNgày sinh: ${dateOfBirth}\nGiới tính: ${gender}\nQuốc tịch: ${nationality}\nGhi chú: ${note}`);
  }
  
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  