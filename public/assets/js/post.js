// $("#submitupdate").on("click", function(e) {
//     e.preventDefault();
//     const newVehicle = {
//     make: $("#makeupdate").val().trim(),
//     model: $("#modelupdate").val().trim(),
//     year: $("#yearupdate").val().trim(),
//     color: $("#colorupdate").val().trim(),
//     price: $("#priceupdate").val().trim(),
//     };

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

//     console.log(newVehicle)
//   });
