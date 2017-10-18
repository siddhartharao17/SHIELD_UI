angular.module('shield').controller('FaqPartialCtrl',function($scope){

    $scope.faqs = [
        {text: 'How do I create a new account?', answer: 'Go to login page.Click create Register here.'},
        {text: 'How do I change my password?', answer: 'To change your password, please click forgot password in the login screen'},
        {text: 'How to contact support ?', answer: 'You can either call 1800-Shield-12 , email to support@shield.com or use chat icon on the dashboard for live support'},
        {text: 'Can I use the same shield account for multiple laptops?', answer: 'No'},
        {text: 'How do I access my shield account on a new device?', answer: 'To be determined.'},
        {text: 'What device does Shield support?', answer: 'As of current iteration, Shield is only supported for Windows'},
        {text: 'What information is shared if I register using my Facebook account?', answer: 'Just your basic information such as name and date of birth'},
        {text: 'How do I update my phone number ?', answer: 'Please log into your account and go to the edit profile page'},
        {text: 'What is Shield?', answer: 'Good question.'}
    ];
});
