export default () => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      />
      <title>Mongo File Upload</title>
    </head>
  
    <body>
      <div class="container">
        <div class="row">
          <div class="col-md-6 m-auto">
            <h1 class="my-4">Lets upload some stuff</h1>
            <form action="/upload" method="post" enctype="multipart/form-data">
              <div class="custom-file mb-3">
                <input
                  type="file"
                  class="custom-file-input"
                  name="file"
                  id="file1"
                  onchange="readSingleFile(this.files)"
                />
                <label class="custom-file-label" for="file1" id="file-label"
                  >Choose file</label
                >
              </div>
              <input
                type="submit"
                value="Submit"
                class="btn btn-primary btn-block"
              />
            </form>
            <hr />
            <% if(files) { %> <% files.forEach(function(file) {%>
            <div class="card mb-3">
              <div class="card-header">
                <div class="card-title">
                  <%= file.filename %>
                </div>
              </div>
              <div class="card-body">
                <% if (file.isImage) { %>
                <img
                  src="image/<%= file.filename %>"
                  width="250"
                  alt=""
                  class="img-responsive"
                />
                <%} else { %>
                <p><% file.filename %></p>
                <% } %>
              </div>
              <div class="card-footer">
                <form action="/files/del/<%= file._id %>" method="post">
                  <button type="submit" class="btn btn-danger">Remove</button>
                </form>
              </div>
            </div>
            <%}) %> <% } else { %>
            <p>No files to show</p>
            <% } %>
          </div>
        </div>
      </div>
  
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
      <script>
        function readSingleFile(e) {
          const name = e[0].name;
          document.getElementById("file-label").textContent = name;
        }
      </script>
    </body>
  </html>
  `;
};
