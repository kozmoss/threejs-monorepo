// app/page.jsx

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { availableModels } from "@/data/availableModels";
import { ClientSceneWrapper } from "@/components/ClientSceneWrapper";
import { ModelSelector } from "@/components/modalSelector";

export default async function HomePage({
  searchParams,
}: {
  searchParams: { model?: string };
}) {
  const { model } = await searchParams;
  const selectedModel =
    availableModels.find((m) => m.path === model) || availableModels[0];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-6">
        <Card className="md:w-3/4">
          <CardContent className="h-[600px]">
            <ClientSceneWrapper
              modelPath={selectedModel.path}
              background={selectedModel.background}
            />
          </CardContent>
        </Card>

        <div className="md:w-1/4 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Select Model</CardTitle>
            </CardHeader>
            <CardContent>
              <ModelSelector
                availableModels={availableModels}
                selectedModelPath={selectedModel.path}
              />
            </CardContent>
          </Card>
        </div>
      </div>

      <Separator />

      <Card>
        <CardHeader>
          <CardTitle>Nasıl Kullanılır?</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
            <li>3D modeli döndürmek için fare ile sürükleyin</li>
            <li>Yakınlaştırmak/uzaklaştırmak için fare tekerleği kullanın</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
