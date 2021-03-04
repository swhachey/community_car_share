// Make sure we wait to attach our handlers until the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', (event) => {
  if (event) {
    console.info('DOM loaded');
  }

  // UPDATE
  const changeEatenBtns = document.querySelectorAll('.change-eaten');

  // Set up the event listener for the create button
  if (changeEatenBtns) {
    changeEatenBtns.forEach((button) => {
      button.addEventListener('click', (e) => {
        // Grabs the id of the element that goes by the name, "id"
        const id = e.target.getAttribute('data-id');
        //   newSleep                             data-newsleep
        const newEaten = e.target.getAttribute('data-neweaten');

  //STOPPED HERE!!!!
        // hide(document.getElementById('eatButton'));

        // document.getElementById('id').style.visibility = 'hidden'
        const newEatenState = {
          eaten: newEaten,
        };



        fetch(`/api/burgers/${id}`, {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },

          // make sure to serialize the JSON body
          body: JSON.stringify(newEatenState),
        }).then((response) => {
          // Check that the response is all good
          // Reload the page so the user can see the new quote
          if (response.ok) {
            console.log(`changed eaten to: ${newEaten}`);
            // document.getElementById(changeEatenBtns).style.visibility = 'hidden'
            location.reload('/');
          } else {
            alert('something went wrong!');
          }
        });
      });
    });
  }

  // CREATE
  const createBurgerBtn = document.getElementById('create-form');

  if (createBurgerBtn) {
    createBurgerBtn.addEventListener('submit', (e) => {
      e.preventDefault();

      // Grabs the value of the textarea that goes by the name, "quote"
      const newBurger = {
        name: document.getElementById('ca').value.trim(),
        eaten: false,
      };

      // Send POST request to create a new quote
      fetch('/api/burgers', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },

        // make sure to serialize the JSON body
        body: JSON.stringify(newBurger),
      }).then(() => {
        // Empty the form
        document.getElementById('ca').value = '';

        // Reload the page so the user can see the new quote
        console.log('What kind of burger!');
        location.reload();
      });
    });
  }

  // DELETE
  // const deleteBurgerBtns = document.querySelectorAll('.delete-burger');

  // Set up the event listeners for each delete button
  // deleteBurgerBtns.forEach((button) => {
  //   button.addEventListener('click', (e) => {
  //     const id = e.target.getAttribute('data-id');

  //     // Send the delete request
  //     fetch(`/api/burgers/${id}`, {
  //       method: 'DELETE',
  //     }).then((res) => {
  //       console.log(res);
  //       console.log(`Deleted burger: ${id}`);

  //       // Reload the page
  //       location.reload();
  //     });
  //   });
  // });
});
