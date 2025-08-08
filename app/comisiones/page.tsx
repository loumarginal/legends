"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ExternalLink, Heart, Clock } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"

// DATOS EDITABLES - Cambia estos enlaces según necesites
const commissionsData = {
  contactLink: "https://www.facebook.com/gashawrld", // Cambia por tu enlace de contacto

  // Planes de precios
  pricingPlans: [
    {
      name: "Traducción Basica",
      price: "$30",
      description: "Perfecto para quienes desean leer la historia",
      features: [
        "Entrega en archivos DOCX",
        "Edición basica",
        "Tiempo de traducción: 7 días",
        "Soporte via Facebook",
      ],
      popular: false,
    },
    {
      name: "eBook Profesional",
      price: "$60",
      description: "Copía 1 a 1 de la version original",
      features: [
        "Entrega en varios formatos (PDF, EPUB, DOCX)",
        "Copía original del EPUB Japones",
        "Copía de todas las ilustraciones en JPEG",
        "Tiempo de traducción: 10 días",
        "Soporte via Discord/Facebook/WhatsApp",
        "1 ronda de revision en caso de errores",
      ],
      popular: true,
    },
    {
      name: "Trilogía",
      price: "$100",
      description: "¿Por qué elegir 1 volumen cuando puedes elegir 3?",
      features: [
        "Todos los beneficios del eBook Profesional",
        "Elige 3 volumenes",
        "Prioridad en Entrega",
        "Tiempo de traducción: 25 días",
        "Soporte vía WhatsApp",
      ],
      popular: false,
    },
  ],

  // Beneficios que ofreces
  benefits: [
    "Traducción de calidad profesional con contexto cultural",
    "Español de nivel nativo con fluidez natural",
    "No usamos Interligencia Artificial",
    "Actualizaciones periódicas del progreso a lo largo de la novela",
    "Opciones de pago y fechas flexibles",
    "Comunicación directa durante todo el proceso",
    "Rondas de revisión incluidas en el precio",
    "Tiempos de entrega rápidos sin comprometer la calidad",
  ],

  // Proceso de trabajo
  process: [
    {
      step: 1,
      title: "Consulta inicial",
      description: "Discutimos los requisitos de tu proyecto, el cronograma y el presupuesto para asegurar el mejor ajuste.",
    },
    {
      step: 2,
      title: "Cotización y Acuerdo",
      description: "Recibes una cotización detallada y establecemos el cronograma y los entregables del proyecto.",
    },
    {
      step: 3,
      title: "Trabajo de Traducción",
      description: "Comienzo el proceso de traducción con actualizaciones regulares sobre el progreso y cualquier pregunta.",
    },
    {
      step: 4,
      title: "Revisión y Entrega",
      description: "Revisión final, corrección de pruebas y entrega de tu proyecto de traducción completado.",
    },
  ],
}

export default function CommissionsPage() {
  return (
    <>
      <div className="min-h-screen bg-background">
        <Navbar />

        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Comisiona tu novela ligera
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Elija el paquete de traducción perfecto para su novela. Desde traducciones básicas hasta adaptaciones de trilogías, tenemos opciones para todas las necesidades y presupuestos.
            </p>
          </div>

          {/* Pricing Plans Grid */}
          <div className="grid gap-8 md:grid-cols-3 mb-16">
            {commissionsData.pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`group hover:shadow-lg transition-all duration-300 relative ${
                  plan.popular ? "border-primary shadow-lg scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{plan.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <p className="text-sm leading-relaxed">{feature}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">¿Qué hace especiales a nuestros paquetes de traducción?</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                6 Años de experiencia en traducción del japonés al Español, con especial atención a la preservación del contexto cultural y a la fluidez natural del idioma.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {commissionsData.benefits.map((benefit, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm leading-relaxed">{benefit}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">¿Cómo funciona?</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Un proceso simple y transparente desde el contacto inicial <br /> hasta la entrega final.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {commissionsData.process.map((item, index) => (
                <Card key={index} className="text-center p-6">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                      {item.step}
                    </div>
                  </div>
                  <CardTitle className="text-lg mb-3">{item.title}</CardTitle>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center space-y-6 bg-card p-12 rounded-lg border">
            <h2 className="text-3xl font-bold tracking-tight">¿Está listo para encargar una novela?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ponte en contacto conmigo con Facebook y acordemos tu presupuesto y horario ahora.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href={commissionsData.contactLink} target="_blank" rel="noopener noreferrer">
                  <Heart className="mr-2 h-4 w-4" />
                  Haz click aquí para contactarme
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>Respuesta rápida</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle className="h-4 w-4" />
                <span>Información detallada</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
