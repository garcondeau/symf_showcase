<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SandwichesController extends AbstractController
{
//    #[Route('/sandwiches', name: 'app_sandwiches')]
//    public function index(): Response
//    {
//        return $this->render('sandwiches/index.html.twig', [
//            'controller_name' => 'SandwichesController',
//        ]);
//    }
    #[Route('/sandwiches/public', name: 'sandwiches_callback')]
    public function publicAction(): JsonResponse
    {
        $data = [
            [
                'id' => '0',
                'title' => 'Ham sandwich',
                'description' => "A ham sandwich is a classic combination of thinly sliced, succulent ham nestled between two slices of bread.",
                'price' => 10
            ],
            [
                'id' => '1',
                'title' => 'Cheese sandwich',
                'description' => "A cheese sandwich is a delightful creation consisting of a delicious blend of cheese enclosed between two slices of bread.",
                'price' => 7.5
            ],
            [
                'id' => '2',
                'title' => 'Veg sandwich',
                'description' => "A vegan sandwich is a plant-based delight filled with a variety of flavorful ingredients.",
                'price' => 5
            ],
        ];
        return new JsonResponse($data);
    }
}
