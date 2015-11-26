# cust-collapsible-list
Web component to create a collapsible list

Creates a collapsible list of content specified in an array. The user can remove every single item in the collapsible list.
     By default, the content will be collapsed.

     The element can be created in the following way:

     <cust-collapsible-list data-set='
                            [{"dataheader": "anyValue","datacontent": "anyValue"},
                            {"dataheader": "anyOtherValue","datacontent": "anyOtherValue"}]'>
     </cust-collapsible-list>

     NOTE: The attribute data-set must be an array containing double quoted JSON. It is necessary to use the parameters dataheader and datacontent.

     The style of the elements in the container div shouldn't be changed except color issues.
     To change the size of the collapsible list add size parameters to the container div.
