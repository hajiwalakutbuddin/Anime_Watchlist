        document.addEventListener('DOMContentLoaded', function() {
            function formatInput(e) {
                let value = e.target.value.toUpperCase().replace(/ /g, '_');
                e.target.value = value;
            }
            var addInput = document.getElementById('add-i');
            var deleteInput = document.getElementById('delete-i');
            if(addInput) addInput.addEventListener('input', formatInput);
            if(deleteInput) deleteInput.addEventListener('input', formatInput);
        });