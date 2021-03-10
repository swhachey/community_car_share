// $("#submitupdate").on("click", function(e) {
//     e.preventDefault();
//     const newVehicle = {
//     make: $("#makeupdate").val().trim(),
//     model: $("#modelupdate").val().trim(),
//     year: $("#yearupdate").val().trim(),
//     color: $("#colorupdate").val().trim(),
//     price: $("#priceupdate").val().trim(),
//     };
let deleteButton = document.querySelectorAll("#delete-Vehicle")
//   $.ajax("/api/vehicles", {
//       type: "POST",
//       data: newVehicle
//     }).then(
//       function() {
//         // Reload the page to get the updated list
//         // console.log()
//         location.reload();
//       }
//     );
console.log(deleteButton)
    console.log("newVehicle")
//   });
deleteButton.forEach((button) => {
  

button.addEventListener('click', (e) => {
  console.log("i've been clicked")
    e.preventDefault()
    const id = e.target.getAttribute('data-id');
    fetch(`/api/vehicles/${id}`, {
      method: 'DELETE',
    }).then(() => {
      location.reload();
    });
  });
});