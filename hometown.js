var images, count_image;

images = [
  "https://i.pinimg.com/564x/97/11/ce/9711cec6391f832a59b3a0b3f6c625bb.jpg",
  "https://i.pinimg.com/564x/49/54/0d/49540dc5d16f08ef12b6460ac9e2de2c.jpg",
  "https://i.pinimg.com/1200x/e0/a2/e4/e0a2e4be2757f2452ed69526ca32725c.jpg",
];
count_image = 0;
let element_image_doc = document.getElementById("image-doc");
element_image_doc.setAttribute("src", images[0]);

document.getElementById("previous").addEventListener("click", (event) => {
  count_image = (typeof count_image === "number" ? count_image : 0) + -1;
  if (count_image < 0) {
    count_image = 2;
  }
  if (count_image == 0) {
    images = [
      "https://i.pinimg.com/564x/97/11/ce/9711cec6391f832a59b3a0b3f6c625bb.jpg",
    ];
    let element_image_doc2 = document.getElementById("image-doc");
    element_image_doc2.setAttribute("src", images[0]);
  } else if (count_image == 1) {
    images = [
      "https://i.pinimg.com/564x/49/54/0d/49540dc5d16f08ef12b6460ac9e2de2c.jpg",
    ];
    let element_image_doc3 = document.getElementById("image-doc");
    element_image_doc3.setAttribute("src", images[0]);
  } else if (count_image == 2) {
    images = [
      "https://i.pinimg.com/1200x/e0/a2/e4/e0a2e4be2757f2452ed69526ca32725c.jpg",
    ];
    let element_image_doc4 = document.getElementById("image-doc");
    element_image_doc4.setAttribute("src", images[0]);
  } else {
    let element_image_doc5 = document.getElementById("image-doc");
    element_image_doc5.innerText = "something wrong";
  }
});

document.getElementById("next").addEventListener("click", (event) => {
  count_image = (typeof count_image === "number" ? count_image : 0) + 1;
  if (count_image > 2) {
    count_image = 0;
  }
  if (count_image == 0) {
    images = [
      "https://i.pinimg.com/564x/97/11/ce/9711cec6391f832a59b3a0b3f6c625bb.jpg",
    ];
    let element_image_doc6 = document.getElementById("image-doc");
    element_image_doc6.setAttribute("src", images[0]);
  } else if (count_image == 1) {
    images = [
      "https://i.pinimg.com/564x/49/54/0d/49540dc5d16f08ef12b6460ac9e2de2c.jpg",
    ];
    let element_image_doc7 = document.getElementById("image-doc");
    element_image_doc7.setAttribute("src", images[0]);
  } else if (count_image == 2) {
    images = [
      "https://i.pinimg.com/1200x/e0/a2/e4/e0a2e4be2757f2452ed69526ca32725c.jpg",
    ];
    let element_image_doc8 = document.getElementById("image-doc");
    element_image_doc8.setAttribute("src", images[0]);
  } else {
    let element_image_doc9 = document.getElementById("image-doc");
    element_image_doc9.innerText = "something wrong";
  }
});
