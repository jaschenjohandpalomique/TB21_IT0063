document.addEventListener('DOMContentLoaded', function() {
    const flexDirectionSelect = document.getElementById('flexDirection');
    const justifyContentSelect = document.getElementById('justifyContent');
    const alignItemsSelect = document.getElementById('alignItems');
    const flexContainer = document.getElementById('flexContainer');
    const resetButton = document.getElementById('resetFlex');
    const growAllButton = document.getElementById('growAll');
    const flexGrowInputs = document.querySelectorAll('.additional-controls input[type="number"]');

    flexDirectionSelect.addEventListener('change', updateFlexProperties);
    justifyContentSelect.addEventListener('change', updateFlexProperties);
    alignItemsSelect.addEventListener('change', updateFlexProperties);

    function updateFlexProperties() {
        const flexDirectionValue = flexDirectionSelect.value;
        const justifyContentValue = justifyContentSelect.value;
        const alignItemsValue = alignItemsSelect.value;

        flexContainer.style.flexDirection = flexDirectionValue;
        flexContainer.style.justifyContent = justifyContentValue;
        flexContainer.style.alignItems = alignItemsValue;
    }

    resetButton.addEventListener('click', function() {
        flexDirectionSelect.value = 'row';
        justifyContentSelect.value = 'flex-start';
        alignItemsSelect.value = 'stretch';
        updateFlexProperties();

        flexGrowInputs.forEach(input => {
            input.value = '0';
        });

        document.getElementById('item-1').style.flexGrow = '0';
        document.getElementById('item-2').style.flexGrow = '0';
        document.getElementById('item-3').style.flexGrow = '0';
    });

    growAllButton.addEventListener('click', function() {
        const flexGrow1 = document.getElementById('flex-grow-1').value;
        const flexGrow2 = document.getElementById('flex-grow-2').value;
        const flexGrow3 = document.getElementById('flex-grow-3').value;

        document.getElementById('item-1').style.flexGrow = flexGrow1;
        document.getElementById('item-2').style.flexGrow = flexGrow2;
        document.getElementById('item-3').style.flexGrow = flexGrow3;
    });
});
