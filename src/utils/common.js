export function updateClipboard(newClip) {
  navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
    if (result.state == "granted" || result.state == "prompt") {
      navigator.clipboard.writeText(newClip).then(
        function () {
          /* clipboard successfully set */
        },
        function () {
          /* clipboard write failed */
        }
      );
    }
  });
}
