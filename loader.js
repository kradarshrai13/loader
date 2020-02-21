document.getElementById('getAPI').addEventListener('click', getAPI);

function getAPI() {
      document.getElementById("loader").style.display="block";
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => { document.getElementById("loader").style.display="None"; return res.json() })
      .then((data) => {
          let result = `<h2> User Info From Jsonplaceholder API</h2>`;
          data.forEach((user) => {
              const {id, name, email, address:{city,street}} = user
              result +=
                  `<div>
                      <h5> User ID: ${id} </h5>
                      <ul>
                          <li> User Full Name : ${name}</li>
                          <li> User Email : ${email} </li>
                          <li> User Address : ${city}, ${street} </li>
                      </ul>
                   </div>`;
              document.getElementById('result').innerHTML = result;
                    });
                })
                .catch((err) => {
            console.log(err);
        })


        }
